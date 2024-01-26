using System.ComponentModel.DataAnnotations;

namespace APICrudServer.Data
{
    public class Mobile
    {
         [Key]
         public int Mobile_Id { get; set; }

         public string? Mobile_Brand_Name { get; set; }

         public string? Mobile_Model_Name { get; set; }

        public int MobilePrice { get; set; }

        
    }
}