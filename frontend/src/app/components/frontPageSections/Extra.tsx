import Link from "next/link";

export default function Extra() {

    return (
        <div>
          <h1 id="extra" className="font-semibold">
            EXTRA INFO
          </h1>
          <h1>
            Hey! Thanks for checking out my site. This site was made with ...
          </h1>
          <h1>
            Check out the admin panel <Link href={"/admin"} className="font-bold hover:text-accent duration-75">here</Link>. You're free to try to break stuff.
          </h1>
        </div>
    )
}