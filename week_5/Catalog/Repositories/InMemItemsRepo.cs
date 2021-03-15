using System.Collections.Generic;
using Catalog.Entities;

namespace Catalog.Repositories
{
    public class InMemItemsRepo
    {
        private readonly List<Item> items = new()
        {
            new Item { Id= Guid.NewGuid(), Name = "Potion", Proce = 9, CreatedDate = DateTimeOffset.UtcNow},
            new Item { Id= Guid.NewGuid(), Name = "IronSword", Proce = 20, CreatedDate = DateTimeOffset.UtcNow},
            new Item { Id= Guid.NewGuid(), Name = "Bronze Shield", Proce = 16, CreatedDate = DateTimeOffset.UtcNow},

        };

        public IEnumerable<Item> GetItems()
        {
            return items;
        }

        public Item GetItem(Guid id)
        {
            return items.Where(items => items.ID == id).SingleOrDefault();
        }
    }
}
