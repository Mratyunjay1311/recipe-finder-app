function LoginModal({
  showLogin,
  setShowLogin,
  setShowRegister
}) {
  return (
    <div
      className={`
        fixed inset-0 z-50
        transition-all duration-500
        ${
          showLogin
            ? "pointer-events-auto"
            : "pointer-events-none"
        }
      `}
    >
      {/* Overlay */}

      <div
        onClick={() => setShowLogin(false)}
        className={`
          absolute inset-0
          bg-black/40
          backdrop-blur-sm
          transition-opacity
          duration-500

          ${
            showLogin
              ? "opacity-100"
              : "opacity-0"
          }
        `}
      ></div>

      {/* Drawer */}

      <div
        className={`
          absolute
          top-0
          right-0
          h-screen
          w-[400px]
          bg-white
          shadow-2xl
          p-8

          transition-transform
          duration-700
          ease-out

          rounded-l-3xl

          ${
            showLogin
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >
        <button
          onClick={() => setShowLogin(false)}
          className="text-3xl"
        >
          ×
        </button>

        <h2 className="text-3xl font-bold mt-8">
          Welcome Back
        </h2>

        <p className="text-gray-500 mt-2">
          Login to continue
        </p>

        <form className="mt-8 space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border p-3 rounded-lg"
          />

          <button
            className="
              w-full
              bg-green-600
              text-white
              py-3
              rounded-lg
            "
          >
            Login
          </button>
        </form>

        <p className="mt-5 text-center">
          Don't have an account?

          <button
            onClick={() => {
              setShowLogin(false)
              setShowRegister(true)
            }}
            className="
              ml-2
              text-green-600
              font-semibold
            "
          >
            Register
          </button>
        </p>
      </div>
    </div>
  )
}

export default LoginModal