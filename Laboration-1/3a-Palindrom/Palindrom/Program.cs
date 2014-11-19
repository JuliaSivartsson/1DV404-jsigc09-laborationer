using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Palindrom
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Skriv in textrad (enbart små bokstäver):");
            string checkIfPalindrome = Console.ReadLine();

            if (IsPalindrome(checkIfPalindrome) == true)
            {
                Console.WriteLine("{0} är ett palindrom", checkIfPalindrome);
            }
            else
            {
                Console.WriteLine("{0} är inte ett palindrom", checkIfPalindrome);
            }

        }

        public static bool IsPalindrome(string value)
        {
            int min = 0;
            int max = value.Length - 1;
            while(true)
            {
                if (min > max)
                {
                    return true;
                }

                char a = value[min];
                char b = value[max];

                if (a != b)
                {
                    return false;
                }

                min++;
                max--;
            }
        }
    }
}
