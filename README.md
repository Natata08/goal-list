# Goals Tracker App

A simple and elegant goals tracking application built with React, TypeScript, and Vite. This app allows users to add, view, and delete personal goals with form validation to ensure quality input.

## 🌟 Live Demo

**[🚀 Try the live app here!](https://natata08.github.io/goal-list/)**

## ✨ Features

- **Add Goals**: Create new goals with a title and description
- **Form Validation**: Prevents submission of empty fields with visual feedback
- **Delete Goals**: Remove completed or unwanted goals
- **Responsive Design**: Modern, clean UI that works on all devices
- **TypeScript Support**: Full type safety throughout the application

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd todo-list
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## 🛠️ Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the app for production
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint for code quality checks

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Header.tsx          # App header with image and title
│   ├── NewGoal.tsx         # Form component for adding new goals
│   ├── GoalList.tsx        # Component to display list of goals
│   └── Goal.tsx            # Individual goal item component
├── assets/
│   └── goals.jpg           # Header image
├── App.tsx                 # Main application component
├── main.tsx               # Application entry point
└── index.css              # Global styles and validation CSS
```

## 🎨 Styling

The app uses a modern design with:

- Custom CSS with a dark theme
- Poppins font from Google Fonts
- Gradient backgrounds and subtle shadows
- Form validation styling with red borders and error messages

## 🔧 Technologies Used

- **React 19** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **ESLint** - Code linting and quality
- **CSS3** - Styling with modern features

## 📝 Form Validation

The app includes robust form validation:

- **Required Fields**: Both goal title and description are mandatory
- **Visual Feedback**: Invalid fields show red borders
- **Error Messages**: Clear error messages appear below invalid inputs
- **Trim Whitespace**: Prevents submission of whitespace-only entries

## 🎯 Usage

1. **Adding a Goal**: Fill in both the "Your goal" and "Short summary" fields, then click "Add goal"
2. **Validation**: If either field is empty, you'll see error messages and red borders
3. **Viewing Goals**: All goals appear in a responsive grid layout
4. **Deleting Goals**: Click the delete button (×) on any goal to remove it
