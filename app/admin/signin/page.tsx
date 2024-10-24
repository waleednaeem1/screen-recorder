export const metadata = {
    title: "Super Admin Sign In",
    description: "Page description",
  };
  
  import Link from "next/link";
  
  export default function SignIn() {
    return (
      <section>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="py-12 md:py-20">
            
            {/* Contact form */}
            <form className="mx-auto max-w-[400px]">
              <div className="space-y-5">
                <div>
                  <label
                    className="mb-1 block text-sm font-medium text-indigo-200/65"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="form-input w-full"
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <div className="mb-1 flex items-center justify-between gap-3">
                    <label
                      className="block text-sm font-medium text-indigo-200/65"
                      htmlFor="password"
                    >
                      Password
                    </label>
                  </div>
                  <input
                    id="password"
                    type="password"
                    className="form-input w-full"
                    placeholder="Your password"
                  />
                </div>
              </div>
              <div className="mt-6 space-y-5">
                <button className="btn w-full bg-gradient-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%]">
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }
  