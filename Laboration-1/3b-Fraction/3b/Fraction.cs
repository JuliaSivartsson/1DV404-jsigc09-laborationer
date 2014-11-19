using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _3b
{
    class Fraction
    {
        //Returnerar täljaren
        public int getNumerator { get; private set; }

        //Returnerar nämnaren
        public int getDenominator { get; private set; }
        
        //Konstruktor
        public Fraction(int numerator, int denominator)
        {
            getNumerator = numerator;
            getDenominator = denominator;

            if (getDenominator == 0)
            {
                throw new FormatException();
            }

        }
     
           public Fraction Add(Fraction fraction2, Fraction fraction8)
            {
               //Adderar två bråktal
                int lcd = GetLCD(fraction8, fraction2);
                int multiplier = 0;
                if (fraction2.getDenominator < lcd)
                {
                    multiplier = lcd / fraction2.getDenominator;
                    fraction2.getNumerator = multiplier * (fraction2.getNumerator);
                    fraction2.getDenominator = multiplier * (fraction2.getDenominator);
                }
                else
                {
                    multiplier = lcd / fraction8.getDenominator;
                    fraction8.getNumerator = multiplier * (fraction8.getNumerator);
                    fraction8.getDenominator = multiplier * (fraction8.getDenominator);
                }

                Fraction Fraction3 = new Fraction(fraction2.getNumerator + fraction8.getNumerator, lcd);

                return Fraction3;
            }

           public Fraction Multiply(Fraction a, Fraction b)
           {
               // Multiplicerar två bråktal
               int lcd = GetLCD(b, a);
               int numerator = a.getNumerator * b.getNumerator;
               int denomenator = a.getDenominator * b.getDenominator;
              Fraction Fraction3 = new Fraction(numerator, denomenator);

                return Fraction3;
           }

            //Lägsta gemensamma nämnare
            public static int GetLCD(Fraction b, Fraction c)
            {
                int i = b.getDenominator;
                int j = c.getDenominator;

                int greater = 0;
                int lesser = 0;

                if (i > j)
                {
                    greater = i; lesser = j;
                }
                else if (i < j)
                {
                    greater = j; lesser = i;
                }
                else
                {
                    return i;
                }
                for (int iterator = 1; iterator <= lesser; iterator++)
                {
                    if ((greater * iterator) % lesser == 0)
                    {
                        return iterator * greater;
                    }
                }
                return 0;
            }


            public bool isNegative(Fraction a)
            {
                if (a.getNumerator < 0)
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }

        // Jämför två Fraction-konstruktorer och ser om de är samma bråktal
        public bool isEqualTo(Fraction a, Fraction b)
        {
            if (a.getDenominator == b.getDenominator && a.getNumerator == b.getNumerator)
            {
                return true;
            }
        return false;
        }

        // returnerar sträng av bråktalet
        public override string ToString()
        {
            return getNumerator + "/" + getDenominator;
        }
    }
}
