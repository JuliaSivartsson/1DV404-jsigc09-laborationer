using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _3b
{
    class Program
    {
        static void Main(string[] args)
        {
            try
            {
                Fraction f1 = new Fraction(-5, 8);
                Fraction f2 = new Fraction(8, 8);
                Console.WriteLine("Bråktal1: {0}", f1);
                Console.WriteLine("Bråktal2: {0}", f2);
                Fraction sum = f1.Add(f1, f2);
                Fraction sum1 = f2.Add(f2, f1);
                Console.WriteLine("Adderade: {0}", sum1.ToString());
                Console.WriteLine();

                Fraction f3 = new Fraction(3, 4);
                Fraction f4 = new Fraction(1, 3);
                Fraction multiply = f3.Multiply(f3, f4);
                Fraction multiply1 = f4.Multiply(f4, f3);
                Console.WriteLine("Bråktal3: {0}", f3);
                Console.WriteLine("Bråktal4: {0}", f4);
                Console.WriteLine("Multiplicerade: {0}", multiply1.ToString());
                Console.WriteLine();

                Fraction f6 = new Fraction(2, 3);
                Fraction f7 = new Fraction(2, 3);
                Boolean equal = f6.isEqualTo(f6, f7);
                if (equal == true)
                {
                    Console.WriteLine("Bråktalen {0} & {1} är lika stora", f6, f7);
                }
                else
                {
                    Console.WriteLine("Bråktalen {0} & {1} är inte lika stora.", f6, f7);
                }
                


            }
            catch(Exception e)
            {
                Console.WriteLine(e.Message);
            }

        }
    }
}
