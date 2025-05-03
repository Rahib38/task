

````markdown
# 🧩 Task Management Dashboard

A modern, responsive task management dashboard built with **Next.js (App Router)**, **ShadCN UI**, **Tailwind CSS**, and integrated with a secure backend API using JWT authentication. Easily manage your tasks with status tracking, deadline reminders, and clean UI components.

---

## 🚀 Features

- ✅ Create, view, update, and delete tasks
- 🔐 Secure API communication with JWT-based authentication
- 🗂 Organized by task status (Pending, In Progress, Done)
- 📅 Display task deadlines in readable format
- 🌙 Dark mode support (via ShadCN Theme)
- ⚡️ Optimized UI built with ShadCN components

---

## 🛠️ Tools & Technologies

| Tech            | Purpose                          |
|-----------------|----------------------------------|
| **Next.js**     | React framework (App Router)     |
| **Tailwind CSS**| Utility-first CSS styling        |
| **ShadCN UI**   | Accessible, styled components    |
| **Lucide Icons**| Icon set used in UI              |
| **JWT Auth**    | API authentication               |
| **TypeScript**  | Type safety and autocompletion   |
| **React Query** *(optional)* | Data caching and mutation handling |

---

## ⚙️ Setup Instructions

### ✅ Prerequisites

- Node.js ≥ 18.x
- NPM or Yarn
- Backend API running at `http://localhost:3002` (or your URL)

---

### 📦 Installation

```bash
git clone https://github.com/Rahib38/task.git
cd task
npm install
````

---

### 🔐 Environment Variables

Create a `.env.local` file at the root:

```env
NEXT_PUBLIC_API_URL=http://localhost:3002/api/v1
NEXT_PUBLIC_AUTH_SECRET=your_jwt_secret
```

---

### 🧪 Development

```bash
npm run dev
```

Visit: [http://localhost:3000](http://localhost:3000)

---

## 🧱 Folder Structure

```
task-dashboard/
│
├── app/
│   ├── dashboard/
│   │   └── task/
│   │       └── [id]/page.tsx   # Dynamic task view
│
├── components/
│   ├── TaskCard.tsx            # Task display card
│   ├── TaskForm.tsx            # Task creation/edit form
│
├── lib/
│   └── api.ts                  # API helper functions
│
├── styles/
│   └── globals.css
│
└── .env.local
```

---

## 📡 API Reference

All API routes follow REST standards:

| Method | Endpoint      | Description         |
| ------ | ------------- | ------------------- |
| GET    | `/task`       | Get all tasks       |
| POST   | `/task`       | Create new task     |
| DELETE | `/task/:id`   | Delete a task       |
| PATCH  | `/task/:id`   | Update task details |
| POST   | `/auth/login` | Login to get token  |

🛡️ Pass your `accessToken` in the `Authorization` header:

```bash
Authorization: Bearer <token>
```

---

## 📸 UI Preview

> *(Add screenshots or a Loom demo link here)*

---

## 💡 Future Improvements

* [ ] Drag-and-drop task reordering
* [ ] User roles and permissions
* [ ] Notifications/reminders
* [ ] PWA support for offline access

---

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

---

## 📜 License

[MIT](LICENSE)

---

Made with ❤️ by \[Nadimul Rahib]

```

---

Would you like this saved as a downloadable `README.md` file or want me to include screenshot placeholders too?
```
