# Contact Form Email Setup (Resend)

Contact form submissions are sent to **otugabriel51@gmail.com** using [Resend](https://resend.com) (free tier: 3,000 emails/month).

## One-time setup

1. **Create a Resend account** (free)  
   Go to [resend.com](https://resend.com) and sign up.

2. **Get your API key**  
   In the Resend dashboard: **API Keys** → **Create API Key** → copy the key (starts with `re_`).

3. **Add the key to your project**  
   In the project root, create a file named `.env.local` with:

   ```
   RESEND_API_KEY=re_your_api_key_here
   ```

4. **Restart the dev server**  
   Stop the server (Ctrl+C) and run `npm run dev` again.

After this, when someone submits the contact form, you’ll receive an email at **otugabriel51@gmail.com** with their name, email, and message. Replying will go to the sender’s email.
