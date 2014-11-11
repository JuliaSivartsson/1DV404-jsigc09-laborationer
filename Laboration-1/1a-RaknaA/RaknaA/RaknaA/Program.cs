using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RaknaA
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Skriv in textrad:");
            string line = Console.ReadLine();

            int count_a = line.Split('a').Length - 1;
            Console.Write("Antal a: ");
            Console.WriteLine(count_a);

            int count_A = line.Split('A').Length - 1;
            Console.Write("Antal A: ");
            Console.WriteLine(count_A);
        }
    }
}
