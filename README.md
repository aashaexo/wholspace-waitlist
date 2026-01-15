# Wholspace Waitlist

A beautiful, dark-themed waitlist landing page built with React, Vite, and Tailwind CSS v4.

## Tech Stack

- **Build**: Vite 7
- **Framework**: React 19
- **Styling**: Tailwind CSS v4
- **Font**: Space Grotesk (Google Fonts)
- **Backend**: Firebase Firestore (for email collection)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open http://localhost:5173 in your browser

## Firebase Setup (Optional)

To enable email collection, configure Firebase:

1. Create a Firebase project at https://console.firebase.google.com
2. Enable Firestore Database
3. Create a `.env` file in the root directory:

```env
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=1:123456789:web:abc123
```

4. Set up Firestore security rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /waitlist/{document} {
      allow create: if request.resource.data.email is string;
      allow read: if false;
    }
  }
}
```

Without Firebase configured, the form works in demo mode (simulates submission).

## Production Build

```bash
npm run build
```

Output will be in the `dist/` folder, ready for deployment.

## Deployment

### Cloudflare Pages

1. Connect your Git repository
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Add environment variables for Firebase

### Vercel

1. Import your Git repository
2. Framework preset will auto-detect Vite
3. Add environment variables for Firebase

## Project Structure

```
src/
├── components/
│   ├── Header.jsx      # Navigation header
│   ├── Hero.jsx        # Hero section with email form
│   ├── WhyJoin.jsx     # Feature cards section
│   ├── FoundingPerks.jsx # Perks and progress section
│   └── Footer.jsx      # Footer with social links
├── lib/
│   └── firebase.js     # Firebase configuration
├── App.jsx             # Main app component
├── main.jsx            # Entry point
└── index.css           # Tailwind CSS + custom styles
```

## Customization

- Colors: Edit the `@theme` block in `src/index.css`
- Content: Update text in component files
- Spots/Progress: Edit constants in `FoundingPerks.jsx`

## License

MIT
