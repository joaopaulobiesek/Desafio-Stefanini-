namespace Example.API.Models.Exceptions
{
    public class InvalidAgeExceptions : ArgumentException
    {
        public InvalidAgeExceptions() : base("Example cannot be that old.")
        {
        }
    }
}
