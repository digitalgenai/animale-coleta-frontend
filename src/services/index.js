import { QueryClient } from "@tanstack/react-query";
import axios from "axios";

export const AXIOS = axios.create({
    baseURL: "http://localhost:8000"
    // baseURL: "https://animale-back.onrender.com"
});

export const QUERYCLIENT = new QueryClient();
