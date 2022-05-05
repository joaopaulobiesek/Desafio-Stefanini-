﻿namespace Example.API._Common
{
    public abstract class BaseResponse
    {
        public bool Success { get; set; } = true;

        public object? Error { get; set; } = null;
    }
}
