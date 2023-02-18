using Microsoft.AspNetCore.Mvc;

namespace DIA.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
