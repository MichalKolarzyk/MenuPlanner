﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MenuPlanner.API.Abstracts
{
    public class PagedResponse<T>
    {
        public List<T> Items { get; set; }
        public int TotalPages { get; set; }
        public int ItemsFrom { get; set; }
        public int ItemsTo { get; set; }
        public int TotalItemsCount { get; set; }

        public PagedResponse(List<T> items, int totalItemsCount, int pageSize, int pageNumber)
        {
            Items = items;
            TotalItemsCount = totalItemsCount;
            ItemsFrom = pageSize * (pageNumber - 1) + 1;
            ItemsTo = ItemsFrom + pageSize - 1;
            TotalPages = (int)Math.Ceiling(TotalItemsCount / (double)pageSize);
        }
    }
}
