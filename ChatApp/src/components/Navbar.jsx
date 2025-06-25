import { useTheme } from '../context/ThemeContext';

const Navbar = ({ user }) => {
  const { toggleTheme, theme } = useTheme();

  return (
    <nav className="navbar navbar-dark bg-dark px-3 mb-3 d-flex justify-content-between align-items-center">
      <span className="navbar-brand mb-0 h1">💬 Firebase Chat</span>
      <div className="d-flex align-items-center gap-2">
        <button className="btn btn-outline-light btn-sm" onClick={toggleTheme}>
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
        {user && (
          <>
            <img src={user.photoURL} alt="avatar" className="rounded-circle" width="32" height="32" />
            <button className="btn btn-outline-light btn-sm ms-2" onClick={() => signOut(auth)}>
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};
