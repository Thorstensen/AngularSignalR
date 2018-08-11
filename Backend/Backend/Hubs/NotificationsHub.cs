using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Hubs
{
    public class NotificationsHub : Hub<ITypedHubClient>
    {
        public Task BroadcastMessageAsync(string type, string message)
        {
            return Task.CompletedTask;
        }
    }
}
