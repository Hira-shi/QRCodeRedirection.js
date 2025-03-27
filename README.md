# Device-Based Redirection 📱💻

This Express.js server redirects users based on their device type:

- 📱 **iPhone →** Google
- 🤖 **Android →** Amazon
- 💻 **Computer →** No redirection
- ⏳ **Mobile devices have a 5-second delay before redirection**

## How It Works

1. The server detects the **User-Agent** of the request.
2. If the user is on a **mobile device**, a page appears with a **5-second delay** before redirecting:
    - **iPhone →** [Google](https://www.google.com)
    - **Android →** [Amazon](https://www.amazon.com)
3. If the user is on a **computer**, no redirection occurs.

## Testing on Firefox

To simulate an iPhone on **Firefox**:
1. Open **Developer Tools** (`F12`).
2. Enable **Responsive Mode** (`Ctrl + Shift + M`).
3. Select an **iPhone model**.
4. Reload the page (`F5`).

---

💡 **Future Idea:** Add more device-based customizations! 🚀

