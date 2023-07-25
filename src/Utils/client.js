import { API_READ_ACCESS_TOKEN } from "../components/constance/api-constants";

export async function client(url, options = {}) {
  const fetchOptions = {
    method: "GET",
    ...options,
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      Authorization: `Bearer ${API_READ_ACCESS_TOKEN}`,
      ...(options.headers ?? {}),
    },
  };
  const session_id = sessionStorage.getItem("session_id");
  let reqUrl = url;
  if(session_id){

    reqUrl+=`?session_id=${session_id}`
  }
  const response = await fetch(reqUrl, fetchOptions);
  const data = await response.json();
  if (!response.ok) {
    throw data;
  }
  return data;
}

// URLSearchParams
// Amir Rashidi7:03 PM
// Const route = useRoute()
// Const redirect= route.query?.redirect ?? "/"
// router.push(redirect)
