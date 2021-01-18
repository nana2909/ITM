using System;

namespace APIServer.Service
{
    public class AdmissionService
    {
        public static string GenerateKey(string start)
        {
            var parts = start.Split(' ');
            var key = "";
            foreach (var part in parts)
            {
                if (!part.Equals("&"))
                {
                    key += part[0].ToString().ToUpper();
                }
            }

            var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            var stringChars = new char[8];
            var random = new Random();
            for (int i = 0; i < stringChars.Length; i++)
            {
                stringChars[i] = chars[random.Next(chars.Length)];
            }
            var _stringChars = new String(stringChars);
            var finalString = key + _stringChars;
            return finalString;
        }

        public static bool ValidateAge(DateTime DoB)
        {
            var age = DateTime.Today.Year - DoB.Year;

            if (age < 18)
            {
                return false;
            }
            return true;
        }

    }
}
