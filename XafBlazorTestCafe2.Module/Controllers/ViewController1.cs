using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using DevExpress.Data.Filtering;
using DevExpress.ExpressApp;
using DevExpress.ExpressApp.Actions;
using DevExpress.ExpressApp.Editors;
using DevExpress.ExpressApp.Layout;
using DevExpress.ExpressApp.Model.NodeGenerators;
using DevExpress.ExpressApp.SystemModule;
using DevExpress.ExpressApp.Templates;
using DevExpress.ExpressApp.Utils;
using DevExpress.ExpressApp.Xpo;
using DevExpress.Persistent.Base;
using DevExpress.Persistent.Validation;
using XafBlazorTestCafe2.Module.BusinessObjects;

namespace XafBlazorTestCafe2.Module.Controllers
{
    // For more typical usage scenarios, be sure to check out https://documentation.devexpress.com/eXpressAppFramework/clsDevExpressExpressAppViewControllertopic.aspx.
    public partial class ViewController1 : ViewController
    {
        public ViewController1()
        {
            InitializeComponent();
            SimpleAction Clear = new SimpleAction(this, "Clear", PredefinedCategory.View);
            Clear.Caption = "Clear Data";
            Clear.Execute += Clear_Execute;
            // Target required Views (via the TargetXXX properties) and create their Actions.
        }

        private void Clear_Execute(object sender, SimpleActionExecuteEventArgs e)
        {
            var XpObjectSpace=this.View.ObjectSpace as XPObjectSpace;
            XpObjectSpace.Session.ExecuteNonQuery("DELETE FROM DomainObject1; DELETE FROM Login;");
            XpObjectSpace.GetObjects<LoginCount>()[0].Count = 0;
            if (XpObjectSpace.IsModified)
                XpObjectSpace.CommitChanges();
        }

        protected override void OnActivated()
        {
            base.OnActivated();
            // Perform various tasks depending on the target View.
        }
        protected override void OnViewControlsCreated()
        {
            base.OnViewControlsCreated();
            // Access and customize the target View control.
        }
        protected override void OnDeactivated()
        {
            // Unsubscribe from previously subscribed events and release other references and resources.
            base.OnDeactivated();
        }
    }
}
