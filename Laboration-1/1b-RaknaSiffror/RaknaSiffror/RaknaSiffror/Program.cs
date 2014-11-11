using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RaknaSiffror
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Skriv in ett heltal:");
            string number = Console.ReadLine();

            int count_zero = number.Split('0').Length - 1;
            int count_odd = number.Split('1', '3', '5', '7', '9').Length - 1;
            int count_even = number.Split('2', '4', '6', '8').Length - 1;

            Console.Write("Nollor: {0}. Udda: {1}. Jämna: {2}.", count_zero, count_odd, count_even);
        }
    }
}
