"use client"

import DashboardLayout from "@/components/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// Mock data
const attendanceData = [
  {
    id: 1,
    school: "St. Marys",
    district: "Kampala",
    teacher: "Katende Brian",
    present: 30,
    absent: 2,
    topic: "Personal Hygiene",
    date: "2024-01-15",
  },
  {
    id: 2,
    school: "Kampala Primary",
    district: "Wakiso",
    teacher: "John Doe",
    present: 18,
    absent: 21,
    topic: "Hand Washing Techniques",
    date: "2024-01-14",
  },
  {
    id: 3,
    school: "Mary SS",
    district: "Kanungu",
    teacher: "Charity Atuheire",
    present: 12,
    absent: 14,
    topic: "Dental Hygiene",
    date: "2024-01-13",
  },
]

export default function Tables() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-emerald-700">Attendance Analysis</h1>
          <p className="text-gray-600 mt-2">Detailed attendance records and analysis across Uganda</p>
        </div>

        <Card className="bg-white/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-emerald-700">Attendance Records</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-emerald-200">
                    <th className="text-left p-3 font-medium text-emerald-800">School</th>
                    <th className="text-left p-3 font-medium text-emerald-800">District</th>
                    <th className="text-left p-3 font-medium text-emerald-800">Teacher</th>
                    <th className="text-left p-3 font-medium text-emerald-800">Present</th>
                    <th className="text-left p-3 font-medium text-emerald-800">Absent</th>
                    <th className="text-left p-3 font-medium text-emerald-800">Rate</th>
                    <th className="text-left p-3 font-medium text-emerald-800">Topic</th>
                    <th className="text-left p-3 font-medium text-emerald-800">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {attendanceData.map((record) => {
                    const total = record.present + record.absent
                    const rate = ((record.present / total) * 100).toFixed(1)
                    return (
                      <tr key={record.id} className="border-b border-gray-100 hover:bg-emerald-50">
                        <td className="p-3 font-medium">{record.school}</td>
                        <td className="p-3 text-gray-600">{record.district}</td>
                        <td className="p-3 text-gray-600">{record.teacher}</td>
                        <td className="p-3 text-emerald-600 font-medium">{record.present}</td>
                        <td className="p-3 text-red-600 font-medium">{record.absent}</td>
                        <td className="p-3">
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${
                              Number.parseFloat(rate) >= 80
                                ? "bg-emerald-100 text-emerald-800"
                                : Number.parseFloat(rate) >= 60
                                  ? "bg-yellow-100 text-yellow-800"
                                  : "bg-red-100 text-red-800"
                            }`}
                          >
                            {rate}%
                          </span>
                        </td>
                        <td className="p-3 text-gray-600">{record.topic}</td>
                        <td className="p-3 text-gray-500">{record.date}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Summary Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-emerald-700">Average Attendance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-emerald-600">
                {(
                  attendanceData.reduce((sum, record) => {
                    const total = record.present + record.absent
                    return sum + (record.present / total) * 100
                  }, 0) / attendanceData.length
                ).toFixed(1)}
                %
              </div>
              <p className="text-sm text-gray-500 mt-2">Across all schools</p>
            </CardContent>
          </Card>

          <Card className="bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-emerald-700">Total Students</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-emerald-600">
                {attendanceData.reduce((sum, record) => sum + record.present + record.absent, 0)}
              </div>
              <p className="text-sm text-gray-500 mt-2">Enrolled students</p>
            </CardContent>
          </Card>

          <Card className="bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-emerald-700">Active Districts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-emerald-600">
                {[...new Set(attendanceData.map((record) => record.district))].length}
              </div>
              <p className="text-sm text-gray-500 mt-2">Districts covered</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}
