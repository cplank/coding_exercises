// Given a roman numeral, convert it to an integer. Input is guaranteed to be within the range from 1 ro 3999

//Example: 
// Input: "III"
//Output: 3

//First, map the seven roman numeral symbols to the correspoding integer

//Split the roman numeral into an array where each symbol is an index in the array

//Check the symbols, if the symbol is an I, we'll need to check if the next symbol is also an I. If it isn't, then we need to subtract 1 instead of add. 

public class Solution
{
    static void Main(string[] args)
    {
        Solution.RomanToInt("III");
    }
    public static int RomanToInt(string s)
    {
        string[] sArray = s.Split("");
        Console.WriteLin(sArray);

    }
}


