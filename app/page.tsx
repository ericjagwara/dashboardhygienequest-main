"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

// Demo users for different roles
const demoUsers = {
  admin: { username: "admin", password: "admin123", role: "admin" },
  manager: { username: "manager", password: "manager123", role: "manager" },
  field: { username: "field", password: "field123", role: "field_assistant" },
}

export default function LoginPage() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [selectedRole, setSelectedRole] = useState("")
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [currentUser, setCurrentUser] = useState<any>(null)

  const handleLogin = () => {
    // Demo authentication logic
    const user = Object.values(demoUsers).find((u) => u.username === username && u.password === password)

    if (user) {
      setCurrentUser(user)
      setIsLoggedIn(true)
      // Store user in localStorage for persistence across pages
      localStorage.setItem("currentUser", JSON.stringify(user))
    } else {
      alert("Invalid credentials. Try: admin/admin123, manager/manager123, or field/field123")
    }
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setCurrentUser(null)
    setUsername("")
    setPassword("")
    setSelectedRole("")
    // Clear user from localStorage
    localStorage.removeItem("currentUser")
  }

  if (isLoggedIn && currentUser) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100 flex items-center justify-center p-4">
        <Card className="w-full max-w-2xl">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <Image
                src="/hygiene-quest-logo.png"
                alt="Hygiene Quest Logo"
                width={80}
                height={80}
                className="rounded-full"
              />
            </div>
            <CardTitle className="text-2xl text-emerald-700">Welcome to Hygiene Quest Dashboard!</CardTitle>
            <CardDescription>Logged in as {currentUser.role.replace("_", " ").toUpperCase()}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center space-y-2">
              <p className="text-sm text-muted-foreground">
                <strong>Username:</strong> {currentUser.username}
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Role:</strong> {currentUser.role.replace("_", " ")}
              </p>
            </div>

            <div className="bg-emerald-50 p-4 rounded-lg">
              <h3 className="font-semibold text-emerald-800 mb-2">Role Permissions:</h3>
              {currentUser.role === "admin" && (
                <ul className="text-sm text-emerald-700 space-y-1">
                  <li>• Full system access</li>
                  <li>• User management</li>
                  <li>• Reports and analytics</li>
                  <li>• System configuration</li>
                </ul>
              )}
              {currentUser.role === "manager" && (
                <ul className="text-sm text-emerald-700 space-y-1">
                  <li>• School oversight</li>
                  <li>• Progress monitoring</li>
                  <li>• Resource distribution</li>
                  <li>• Team management</li>
                </ul>
              )}
              {currentUser.role === "field_assistant" && (
                <ul className="text-sm text-emerald-700 space-y-1">
                  <li>• Data collection</li>
                  <li>• Facility monitoring</li>
                  <li>• Report submission</li>
                  <li>• Student interaction</li>
                </ul>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link href="/dashboard">
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">📊 Dashboard</Button>
              </Link>
              <Link href="/tables">
                <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white">📋 Attendance Analysis</Button>
              </Link>
              <Link href="/billing">
                <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white">🛒 Dettol Sales</Button>
              </Link>
            </div>

            <Button
              onClick={handleLogout}
              variant="outline"
              className="w-full border-emerald-600 text-emerald-600 hover:bg-emerald-50 bg-transparent"
            >
              Logout
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-16 h-16 bg-emerald-200/30 rounded-lg rotate-12"></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-teal-200/40 rounded-full"></div>
        <div className="absolute bottom-32 left-20 w-20 h-20 bg-cyan-200/25 rounded-lg -rotate-12"></div>
        <div className="absolute bottom-20 right-10 w-14 h-14 bg-emerald-300/30 rounded-full"></div>
        <div className="absolute top-1/2 left-5 w-8 h-8 bg-teal-300/40 rotate-45"></div>
        <div className="absolute top-1/3 right-5 w-10 h-10 bg-cyan-300/35 rounded-lg rotate-12"></div>

        {/* Star shapes */}
        <div className="absolute top-16 right-1/3 text-emerald-300/50 text-2xl">✦</div>
        <div className="absolute bottom-1/4 left-1/4 text-teal-300/40 text-xl">✧</div>
        <div className="absolute top-3/4 right-1/4 text-cyan-300/45 text-lg">✦</div>

        {/* Heart shape */}
        <div className="absolute bottom-10 left-1/3 text-emerald-400/40 text-xl">♥</div>
      </div>

      <div className="w-full max-w-md relative z-10">
        {/* Logo and Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-6">
            <Image
              src="/hygiene-quest-logo.png"
              alt="Hygiene Quest Logo"
              width={100}
              height={100}
              className="rounded-full shadow-lg"
            />
          </div>
          <h1 className="text-4xl font-bold text-emerald-600 mb-2">Hygiene Quest</h1>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Welcome to the Hygiene Quest Dashboard</h2>
          <p className="text-gray-600 text-center max-w-sm mx-auto mb-2">
            Track progress, access resources, and support better hygiene practices in Ugandan schools.
          </p>
          <p className="text-sm text-gray-500 text-center max-w-sm mx-auto">
            This platform helps schools monitor hand-washing facilities, distribute learning materials, and measure the
            impact of hygiene education across Uganda.
          </p>
        </div>

        {/* Login Card */}
        <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-emerald-100">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-2xl text-emerald-700">Sign In</CardTitle>
            <CardDescription className="text-emerald-600">
              Enter your credentials to access the dashboard
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username" className="text-emerald-700 font-medium">
                Username / Email
              </Label>
              <Input
                id="username"
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="border-emerald-200 focus:border-emerald-400 focus:ring-emerald-400"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-emerald-700 font-medium">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border-emerald-200 focus:border-emerald-400 focus:ring-emerald-400"
              />
            </div>

            <Button
              onClick={handleLogin}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2.5"
            >
              Login
            </Button>

            <div className="text-center">
              <button className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">Forgot Password?</button>
            </div>

            {/* Demo Credentials */}
            <div className="mt-6 p-4 bg-emerald-50 rounded-lg border border-emerald-200">
              <h3 className="font-semibold text-emerald-800 mb-2 text-sm">Demo Credentials:</h3>
              <div className="space-y-1 text-xs text-emerald-700">
                <p>
                  <strong>Admin:</strong> admin / admin123
                </p>
                <p>
                  <strong>Manager:</strong> manager / manager123
                </p>
                <p>
                  <strong>Field Assistant:</strong> field / field123
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
