using System;
using DevExpress.ExpressApp;
using DevExpress.ExpressApp.Blazor;
using DevExpress.ExpressApp.Security;
using DevExpress.ExpressApp.Security.ClientServer;
using DevExpress.ExpressApp.SystemModule;
using DevExpress.ExpressApp.Xpo;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using XafBlazorTestCafe2.Blazor.Server.Services;
using XafBlazorTestCafe2.Module.BusinessObjects;

namespace XafBlazorTestCafe2.Blazor.Server {
    public partial class XafBlazorTestCafe2BlazorApplication : BlazorApplication {
        #region Default XAF configuration options (https://www.devexpress.com/kb=T501418)
        static XafBlazorTestCafe2BlazorApplication() {
            DevExpress.Persistent.Base.PasswordCryptographer.EnableRfc2898 = true;
            DevExpress.Persistent.Base.PasswordCryptographer.SupportLegacySha512 = false;
            DevExpress.ExpressApp.BaseObjectSpace.ThrowExceptionForNotRegisteredEntityType = true;
        }
        #endregion
        public XafBlazorTestCafe2BlazorApplication() {
            InitializeComponent();
            SetupAuthentication();
            this.securityStrategyComplex1.RegisterXPOAdapterProviders();
            this.securityStrategyComplex1.AnonymousAllowedTypes.Add(typeof(Login));
            this.securityStrategyComplex1.AnonymousAllowedTypes.Add(typeof(LoginCount));
        }
        private void SetupAuthentication() {
            this.authenticationMixed1.LogonParametersType = typeof(DevExpress.ExpressApp.Security.AuthenticationStandardLogonParameters);
            this.authenticationMixed1.IsSupportChangePassword = true;
            this.authenticationMixed1.AddAuthenticationStandardProvider(typeof(DevExpress.Persistent.BaseImpl.PermissionPolicy.PermissionPolicyUser));
            this.authenticationMixed1.AddIdentityAuthenticationProvider(typeof(DevExpress.Persistent.BaseImpl.PermissionPolicy.PermissionPolicyUser));
        }
       
        protected override void OnSetupStarted() {
            base.OnSetupStarted();
            IConfiguration configuration = ServiceProvider.GetRequiredService<IConfiguration>();
            if(System.Diagnostics.Debugger.IsAttached)
            {
                ConnectionString = InMemoryDataStoreProvider.ConnectionString; 
            }
            else
            {
                if (configuration.GetConnectionString("ConnectionString") != null)
                {
                    ConnectionString = configuration.GetConnectionString("ConnectionString");
                }
            }
           

#if EASYTEST
            if(configuration.GetConnectionString("EasyTestConnectionString") != null) {
                ConnectionString = configuration.GetConnectionString("EasyTestConnectionString");
            }
#endif
#if DEBUG
            if(System.Diagnostics.Debugger.IsAttached && CheckCompatibilityType == CheckCompatibilityType.DatabaseSchema) {
                DatabaseUpdateMode = DatabaseUpdateMode.UpdateDatabaseAlways;
            }
#endif
        }
        protected override void CreateDefaultObjectSpaceProvider(CreateCustomObjectSpaceProviderEventArgs args) {
            IXpoDataStoreProvider dataStoreProvider = GetDataStoreProvider(args.ConnectionString, args.Connection);
            args.ObjectSpaceProviders.Add(new SecuredObjectSpaceProvider((ISelectDataSecurityProvider)Security, dataStoreProvider, true));
            args.ObjectSpaceProviders.Add(new NonPersistentObjectSpaceProvider(TypesInfo, null));
            ((SecuredObjectSpaceProvider)args.ObjectSpaceProviders[0]).AllowICommandChannelDoWithSecurityContext = true;
        }
        private IXpoDataStoreProvider GetDataStoreProvider(string connectionString, System.Data.IDbConnection connection) {
            XpoDataStoreProviderAccessor accessor = ServiceProvider.GetRequiredService<XpoDataStoreProviderAccessor>();
            lock(accessor) {
                if(accessor.DataStoreProvider == null) {
                    accessor.DataStoreProvider = XPObjectSpaceProvider.GetDataStoreProvider(connectionString, connection, true);
                }
            }
            return accessor.DataStoreProvider;
        }
        private void XafBlazorTestCafe2BlazorApplication_DatabaseVersionMismatch(object sender, DatabaseVersionMismatchEventArgs e) {
            //#if EASYTEST
            //            e.Updater.Update();
            //            e.Handled = true;
            //#else
            //            if(System.Diagnostics.Debugger.IsAttached) {
            //                e.Updater.Update();
            //                e.Handled = true;
            //            }
            //            else {
            //                string message = "The application cannot connect to the specified database, " +
            //                    "because the database doesn't exist, its version is older " +
            //                    "than that of the application or its schema does not match " +
            //                    "the ORM data model structure. To avoid this error, use one " +
            //                    "of the solutions from the https://www.devexpress.com/kb=T367835 KB Article.";

            //                if(e.CompatibilityError != null && e.CompatibilityError.Exception != null) {
            //                    message += "\r\n\r\nInner exception: " + e.CompatibilityError.Exception.Message;
            //                }
            //                throw new InvalidOperationException(message);
            //            }
            //#endif
            e.Updater.Update();
            e.Handled = true;
        }
        protected override void OnLoggingOn(LogonEventArgs args)
        {
            base.OnLoggingOn(args);
            var os = this.CreateObjectSpace(typeof(Login));
            LoginCount lc = null;
            if (os.GetObjectsCount(typeof(LoginCount), null) == 0)
            {
               
                lc = os.CreateObject<LoginCount>();
                lc.Count = 0;
            }
            else
            {
                lc = os.GetObjects<LoginCount>()[0];
            }
            lc.Count++;
      
            var Login = os.CreateObject<Login>();
            Login.UserName = "Admin";
            if (os.IsModified)
                os.CommitChanges();

        }
    }
}
