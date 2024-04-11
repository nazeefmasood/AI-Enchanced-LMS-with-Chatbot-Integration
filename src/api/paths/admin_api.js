import baseURL from "../baseUrl";
const adminUrl = `/admin`;

export const adminApi_handleAdminLogin = async () => {
  try {
 await baseURL.post(`${adminUrl}/auth`, {
      email: "nazeefmasood@gmail.com",
      password: "Admin@123",
    });
  } catch (error) {}
};
