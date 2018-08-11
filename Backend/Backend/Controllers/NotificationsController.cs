using Backend.Hubs;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Controllers
{
    [Produces("application/json")]
    [Route("api/notifications")]
    public class NotificationsController : Controller
    {
        private IHubContext<NotificationsHub, ITypedHubClient> _hubContext;

        public NotificationsController(IHubContext<NotificationsHub, ITypedHubClient> hubContext)
        {
            _hubContext = hubContext;
        }

        [HttpPost]
        public void Notify([FromBody]Message message)
        {
            try
            {
                _hubContext.Clients.All.BroadcastMessage(message.Type, message.Payload);
            }
            catch (Exception e)
            {

            }
        }
    }
}
