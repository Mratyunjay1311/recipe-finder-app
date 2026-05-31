function RegisterModal({
  showRegister,
  setShowRegister,
  setShowLogin
}) {
  return (
    <div
      className={`
        fixed inset-0 z-50
        transition-all duration-500
        ${
          showRegister
            ? "pointer-events-auto"
            : "pointer-events-none"
        }
      `}
    >
      {/* Overlay */}

      <div
        onClick={() => setShowRegister(false)}
        className={`
          absolute inset-0
          bg-black/40
          backdrop-blur-sm
          transition-opacity
          duration-500

          ${
            showRegister
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
            showRegister
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >
        <button
          onClick={() => setShowRegister(false)}
          className="text-3xl"
        >
          ×
        </button>

        <h2 className="text-3xl font-bold mt-8">
          Create Account
        </h2>

        <p className="text-gray-500 mt-2">
          Join our recipe community
        </p>

        <form className="mt-8 space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border p-3 rounded-lg"
          />

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

          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full border p-3 rounded-lg"
          />

          <button
            className="
              w-full
              bg-green-600
              text-white
              py-3
              rounded-lg
              hover:bg-green-700
              transition
            "
          >
            Create Account
          </button>
        </form>

        <p className="mt-5 text-center">
          Already have an account?

          <button
            onClick={() => {
              setShowRegister(false)
              setShowLogin(true)
            }}
            className="
              ml-2
              text-green-600
              font-semibold
            "
          >
            Login
          </button>
        </p>
      </div>
    </div>
  )
}

export default RegisterModal