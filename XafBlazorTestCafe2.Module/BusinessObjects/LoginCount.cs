using DevExpress.Persistent.Base;
using DevExpress.Persistent.BaseImpl;
using DevExpress.Xpo;
using System;
using System.Linq;

namespace XafBlazorTestCafe2.Module.BusinessObjects
{
    [DefaultClassOptions]
    public class LoginCount : BaseObject
    {
        /// <summary>
        /// <para>Used to initialize a new instance of a <see cref="LoginCount"/> descendant, in a particular Session.</para>
        /// </summary>
        /// <param name="session">A DevExpress.Xpo.Session object which represents a persistent object&#39;s cache where the business object will be instantiated.</param>
        public LoginCount(Session session) : base(session)
        {

        }

        /// <summary>
        /// <para>Creates a new instance of the <see cref="LoginCount"/> class.</para>
        /// </summary>
        public LoginCount()
        {

        }

        int _count;

        public int Count
        {
            get => _count;
            set => SetPropertyValue(nameof(Count), ref _count, value);
        }
    }
}