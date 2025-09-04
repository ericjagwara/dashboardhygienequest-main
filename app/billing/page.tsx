"use client"

import DashboardLayout from "@/components/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

// Mock data for Dettol sales
const salesData = [
  {
    id: 1,
    school: "St. Marys",
    district: "Kampala",
    product: "Dettol Hand Sanitizer 500ml",
    quantity: 24,
    price: 15000,
    total: 360000,
    status: "Delivered",
    date: "2024-01-15",
  },
  {
    id: 2,
    school: "Kampala Primary",
    district: "Wakiso",
    product: "Dettol Soap Bars (Pack of 12)",
    quantity: 10,
    price: 25000,
    total: 250000,
    status: "Processing",
    date: "2024-01-14",
  },
  {
    id: 3,
    school: "Mary SS",
    district: "Kanungu",
    product: "Dettol Liquid Soap 1L",
    quantity: 15,
    price: 12000,
    total: 180000,
    status: "Pending",
    date: "2024-01-13",
  },
]

export default function Billing() {
  const totalRevenue = salesData.reduce((sum, sale) => sum + sale.total, 0)
  const totalOrders = salesData.length
  const deliveredOrders = salesData.filter((sale) => sale.status === "Delivered").length

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-emerald-700">Dettol Sales</h1>
          <p className="text-gray-600 mt-2">Hygiene product orders and sales management</p>
        </div>

        {/* Sales Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-white/90 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Total Revenue</CardTitle>
              <div className="text-2xl">💰</div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-emerald-700">UGX {totalRevenue.toLocaleString()}</div>
              <p className="text-xs text-gray-500">this month</p>
            </CardContent>
          </Card>

          <Card className="bg-white/90 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Total Orders</CardTitle>
              <div className="text-2xl">📦</div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-emerald-700">{totalOrders}</div>
              <p className="text-xs text-gray-500">orders placed</p>
            </CardContent>
          </Card>

          <Card className="bg-white/90 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Delivered</CardTitle>
              <div className="text-2xl">✅</div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-emerald-700">{deliveredOrders}</div>
              <p className="text-xs text-gray-500">orders completed</p>
            </CardContent>
          </Card>
        </div>

        {/* Orders Table */}
        <Card className="bg-white/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-emerald-700">Recent Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-emerald-200">
                    <th className="text-left p-3 font-medium text-emerald-800">School</th>
                    <th className="text-left p-3 font-medium text-emerald-800">District</th>
                    <th className="text-left p-3 font-medium text-emerald-800">Product</th>
                    <th className="text-left p-3 font-medium text-emerald-800">Qty</th>
                    <th className="text-left p-3 font-medium text-emerald-800">Price</th>
                    <th className="text-left p-3 font-medium text-emerald-800">Total</th>
                    <th className="text-left p-3 font-medium text-emerald-800">Status</th>
                    <th className="text-left p-3 font-medium text-emerald-800">Date</th>
                    <th className="text-left p-3 font-medium text-emerald-800">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {salesData.map((sale) => (
                    <tr key={sale.id} className="border-b border-gray-100 hover:bg-emerald-50">
                      <td className="p-3 font-medium">{sale.school}</td>
                      <td className="p-3 text-gray-600">{sale.district}</td>
                      <td className="p-3 text-gray-600">{sale.product}</td>
                      <td className="p-3 text-center">{sale.quantity}</td>
                      <td className="p-3">UGX {sale.price.toLocaleString()}</td>
                      <td className="p-3 font-medium">UGX {sale.total.toLocaleString()}</td>
                      <td className="p-3">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            sale.status === "Delivered"
                              ? "bg-emerald-100 text-emerald-800"
                              : sale.status === "Processing"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-red-100 text-red-800"
                          }`}
                        >
                          {sale.status}
                        </span>
                      </td>
                      <td className="p-3 text-gray-500">{sale.date}</td>
                      <td className="p-3">
                        <Button size="sm" variant="outline" className="text-xs bg-transparent">
                          View
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Product Catalog */}
        <Card className="bg-white/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-emerald-700">Available Products</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 border border-emerald-200 rounded-lg">
                <h3 className="font-medium text-emerald-800">Dettol Hand Sanitizer</h3>
                <p className="text-sm text-gray-600 mt-1">500ml bottle</p>
                <p className="text-lg font-bold text-emerald-600 mt-2">UGX 15,000</p>
                <Button size="sm" className="mt-3 bg-emerald-600 hover:bg-emerald-700">
                  Order Now
                </Button>
              </div>

              <div className="p-4 border border-emerald-200 rounded-lg">
                <h3 className="font-medium text-emerald-800">Dettol Soap Bars</h3>
                <p className="text-sm text-gray-600 mt-1">Pack of 12 bars</p>
                <p className="text-lg font-bold text-emerald-600 mt-2">UGX 25,000</p>
                <Button size="sm" className="mt-3 bg-emerald-600 hover:bg-emerald-700">
                  Order Now
                </Button>
              </div>

              <div className="p-4 border border-emerald-200 rounded-lg">
                <h3 className="font-medium text-emerald-800">Dettol Liquid Soap</h3>
                <p className="text-sm text-gray-600 mt-1">1 Liter bottle</p>
                <p className="text-lg font-bold text-emerald-600 mt-2">UGX 12,000</p>
                <Button size="sm" className="mt-3 bg-emerald-600 hover:bg-emerald-700">
                  Order Now
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
