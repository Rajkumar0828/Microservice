using Microsoft.AspNetCore.Mvc;

using APICrudServer.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Http.HttpResults;

namespace APUCrudServer.Controllers
{
    [ApiController]
    [Route(" api/[controller]")]

     public class MobileController : ControllerBase
    { 
         private readonly ApiDbContext _context;
         public MobileController  (ApiDbContext context)
         {
             _context = context;
         }
  
         [HttpGet]
         public async Task<ActionResult<List<Mobile>>> GetMobile()
         {
            return Ok(await _context.Mobiles.ToListAsync());
         }
         
        
        
       [HttpGet("{id}")]
        public ActionResult<Mobile> GetMobile(int id)
        {
           var Mobile = _context.Mobiles.Find(id);
           if (Mobile == null)
           {
             return NotFound();
           }
           return Mobile;
         }

          
         [HttpPost]

         public async Task<ActionResult<Mobile>> Create(Mobile Mobile)
         {
            _context.Add(Mobile);

            await _context.SaveChangesAsync();
            return Ok(Mobile);
         }




    
    
         [HttpPut ]
         public async Task<ActionResult> Update( Mobile Mobile)
         {
            
            _context.Entry(Mobile).State =EntityState.Modified;
            await _context.SaveChangesAsync();
            return Ok();
         }


         [HttpDelete("{id}")]

         public async Task<IActionResult> Delete(int id)
         {
            var mobile = await _context.Mobiles.FindAsync(id);
            if (mobile == null)
            {
                return NotFound("Incorrect Customer Id");
            }

            _context.Mobiles.Remove(mobile);
            await _context.SaveChangesAsync();

            return Ok();
         }


    }
}


