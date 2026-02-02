import { QueryClient } from "@tanstack/react-query";
import axios from "axios";

export const AXIOS = axios.create({
  baseURL: "/api",
});

export const QUERYCLIENT = new QueryClient();
