1. **Run the following command to install all dependencies:**
   ```bash
   npm install
   ```

2. **Ensure the values in the `.env` file are correct:**

   - `NEXT_PUBLIC_API_URL: http://localhost:3001` 
     - *This is the domain of the API currently running.*
   
   - `NEXT_PUBLIC_CLIENT_SECRET = 6e068911b0e1a23bf78f2878fb8260a5facad07f5f516a240cbc62f0eea50ea0`
     - *This is the key and must match the value assigned to the `CLIENT_KEY` variable in the API’s `.env` file.*

3. **To run the project, execute the following command:**
   ```bash
   npm run dev
   ```
   This should open the project on port 3000. Ensure that the domain of this client matches the `CLIENT_DOMAIN` variable in the API’s `.env` file.

## 📱 Running the Project on Mobile:

To run the project on your mobile device, you will need the **Port Forwarding** functionality in Visual Studio Code.

1. Locate the "Port Forward" button in the console area:
   ![Port Forward](https://github.com/user-attachments/assets/d118f7cd-65b8-4d3c-83c6-d80795edf50e)

2. Click the button "Forward a Port" and ensure the port is set to **Public**:
   ![Make Port Public](https://github.com/user-attachments/assets/1473cc31-05da-4c7c-be8f-5a686dc7cd64)
   ![Public Port](https://github.com/user-attachments/assets/adb63f21-ef90-43db-bd38-a04c34511ba7)

3. This setup will allow you to quickly deploy the client and the API.

### 🌐 Update Credentials in `.env` for Mobile Access:
To ensure proper functionality, update the following two credentials in the `.env` file:

**From the client side:**

```env
NEXT_PUBLIC_API_URL = http://localhost:3001  ---> https://visualStudioDomainApi.brs.devtunnels.ms
```

**From the API side:**

```env
CLIENT_DOMAIN = http://localhost:5173 --> https://visualStudioDomainClient.brs.devtunnels.ms
API_DOMAIN = http://localhost:3001  ---> https://visualStudioDomainApi.brs.devtunnels.ms
```
