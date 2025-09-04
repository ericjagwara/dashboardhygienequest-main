"use client"

import { useState } from "react"
import DashboardLayout from "@/components/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// Mock data - in a real app, this would come from an API
const mockAttendanceData = [
  {
    id: 1,
    phone: "0772207616",
    students_present: 30,
    students_absent: 2,
    absence_reason: "2 students sick",
    topic_covered: "Personal Hygiene",
  },
  {
    id: 2,
    phone: "0772207616",
    students_present: 18,
    students_absent: 21,
    absence_reason: "bad weather, it was raining too much",
    topic_covered: "Hand Washing Techniques",
  },
  {
    id: 3,
    phone: "0772207616",
    students_present: 12,
    students_absent: 14,
    absence_reason: "bad weather",
    topic_covered: "Dental Hygiene",
  },
]

const mockUsersData = [
  {
    id: 1,
    phone: "0772207616",
    name: "Katende Brian",
    school: "St.Marys",
    district: "Kampala",
    language: "English",
  },
  {
    id: 3,
    phone: "0774405405",
    name: "John Doe",
    school: "Kampala Primary",
    district: "Wakiso",
    language: "English",
  },
  {
    id: 4,
    phone: "0700677231",
    name: "Charity Atuheire",
    school: "Mary SS",
    district: "Kanungu",
    language: "English",
  },
]

export default function Dashboard() {
  const [attendanceData, setAttendanceData] = useState(mockAttendanceData)
  const [usersData, setUsersData] = useState(mockUsersData)
  const [loading, setLoading] = useState(false)

  // Calculate statistics
  const totalPresent = attendanceData.reduce((sum, item) => sum + (item.students_present || 0), 0)
  const totalAbsent = attendanceData.reduce((sum, item) => sum + (item.students_absent || 0), 0)
  const totalAttendance = totalPresent + totalAbsent
  const attendanceRate = totalAttendance > 0 ? ((totalPresent / totalAttendance) * 100).toFixed(1) : 0
  const totalSchools = [...new Set(usersData.map((user) => user.school))].length
  const totalDistricts = [...new Set(usersData.map((user) => user.district))].length

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-emerald-700">Dashboard</h1>
          <p className="text-gray-600 mt-2">Overview of hygiene education progress across Uganda</p>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-white/90 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Total Present</CardTitle>
              <div className="text-2xl">👥</div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-emerald-700">{totalPresent}</div>
              <p className="text-xs text-gray-500">students attended</p>
            </CardContent>
          </Card>

          <Card className="bg-white/90 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Total Absent</CardTitle>
              <div className="text-2xl">❌</div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">{totalAbsent}</div>
              <p className="text-xs text-gray-500">students absent</p>
            </CardContent>
          </Card>

          <Card className="bg-white/90 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Attendance Rate</CardTitle>
              <div className="text-2xl">📈</div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-emerald-700">{attendanceRate}%</div>
              <p className="text-xs text-gray-500">overall attendance</p>
            </CardContent>
          </Card>

          <Card className="bg-white/90 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Schools</CardTitle>
              <div className="text-2xl">🏫</div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-emerald-700">{totalSchools}</div>
              <p className="text-xs text-gray-500">across {totalDistricts} districts</p>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activities */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-emerald-700">Recent Attendance Records</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {attendanceData.slice(0, 3).map((record) => (
                  <div key={record.id} className="flex justify-between items-center p-3 bg-emerald-50 rounded-lg">
                    <div>
                      <p className="font-medium text-emerald-800">{record.topic_covered}</p>
                      <p className="text-sm text-gray-600">
                        Present: {record.students_present} | Absent: {record.students_absent}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-emerald-700">
                        {((record.students_present / (record.students_present + record.students_absent)) * 100).toFixed(
                          1,
                        )}
                        %
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-emerald-700">Active Schools</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {usersData.slice(0, 3).map((user) => (
                  <div key={user.id} className="flex justify-between items-center p-3 bg-teal-50 rounded-lg">
                    <div>
                      <p className="font-medium text-teal-800">{user.school}</p>
                      <p className="text-sm text-gray-600">{user.district} District</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-teal-700">{user.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}
