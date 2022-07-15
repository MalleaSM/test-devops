
using Contacts.Models;
using System.Collections.Generic;
using System.Linq;

namespace Contacts.Repository
{ 
    public class ContactRepository : IContactRepository
    {
        public ContactRepository() 
        {
        }

        public bool ExistsById(long id)
        {
            // TODO: Implement missing logic here
            return false;
        }

        public IEnumerable<Contact> FindAll()
        {
            // TODO: Implement missing logic here
            return new List<Contact>();
        }

        public Contact FindByEmail(string email) 
        {
            // TODO: Implement missing logic here
            return null;
        }

        public Contact FindById(long id)
        {
            // TODO: Implement missing logic here
            return null;
        }

        public Contact Save(Contact entity)
        {
            // TODO: Implement missing logic here
            return null;
        }

        public IEnumerable<Contact> FindByName(string name) 
        {
            // TODO: Implement missing logic here
            return null;
        }        
    }
}