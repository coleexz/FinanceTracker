import { SignedIn,
    SignedOut,
    SignInButton,
    SignOutButton,
    SignUpButton,
    UserButton } 
    from "@clerk/clerk-react"

export const Auth = () => {
    return <div className = "sign-in-container">

        <SignedIn>
            <UserButton />
            <SignOutButton />
        </SignedIn>

        <SignedOut>
            //mode = modal para que el signup y signin aparezcan como popups
            <SignInButton mode = "modal" />
            <SignUpButton mode = "modal"/>
        </SignedOut>
    </div>
}