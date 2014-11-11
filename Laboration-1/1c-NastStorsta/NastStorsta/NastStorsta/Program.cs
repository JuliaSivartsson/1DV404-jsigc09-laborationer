using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NastStorsta
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Skriv in 10 heltal med endast mellanrum emellan:");

            int largest = 0;
            int secondLargest = 0;
            int numbersToRead = 0;
            int temp2 = 0;
            int j = 1;
            for (int i = 0; i < 10; i++ )
            {
                Console.WriteLine("Nummer {0}:", j);
                numbersToRead = int.Parse(Console.ReadLine());

                if (i == 0)
                {
                    // första numret är störst
                    largest = numbersToRead;
                }
                else if (i == 1)
                {
                    // kolla andra numret och sätt värden
                    if (numbersToRead > largest)
                    {
                        temp2 = largest;
                        secondLargest = largest;
                        largest = numbersToRead;
                    }
                    else
                    {
                        secondLargest = numbersToRead;
                    }
                }
                else
                {
                    // större än näst största men mindre än största
                    if (numbersToRead > secondLargest && numbersToRead < largest)
                    {
                        secondLargest = numbersToRead;
                    }
                    // större än största
                    else if (numbersToRead > largest)
                    {
                        temp2 = largest;
                        secondLargest = largest;
                        largest = numbersToRead;

                    }
                }
                j++;
            }
            Console.WriteLine("Näst största numret är: {0}", secondLargest);
            
        }
    }
}
