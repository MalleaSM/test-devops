using System.Collections.Generic;
using System.Linq;
using Contacts.Exceptions;
using Contacts.Models;
using Contacts.Repository;
using Microsoft.AspNetCore.Mvc;

namespace Contacts.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ContactController : ControllerBase
    { 
        private IContactRepository _contactRepository;
        
        public ContactController(IContactRepository repository) 
        {
            _contactRepository = repository;
        }

        private void ValidateContactFields(Contact contact) 
        {
            if (string.IsNullOrEmpty(contact.Email)) 
            {
                throw new RequiredFieldException("email");
            }

            if (string.IsNullOrEmpty(contact.Name)) 
            {
                throw new RequiredFieldException("name");
            }

            var existingContact = _contactRepository.FindByEmail(contact.Email);
            if (existingContact != null) 
            {
                throw new DuplicatedContactException($"Unable to create contact due duplicated email: {contact.Email}");
            }
        }
    }
}
