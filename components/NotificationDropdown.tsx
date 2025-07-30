"use client"

import { useState, useRef, useEffect } from "react"
import { Bell, Clock, CheckCircle, AlertTriangle, X } from "lucide-react"

interface Notification {
  id: number
  type: "reminder" | "accepted" | "repaid" | "defaulted" | "offer"
  title: string
  message: string
  time: string
  isRead: boolean
  nftImage?: string
  amount?: string
}

const mockNotifications: Notification[] = [
  {
    id: 1,
    type: "accepted",
    title: "Loan Offer Accepted",
    message: "Your loan offer for GUI Gang #1234 has been accepted.",
    time: "2 minutes ago",
    isRead: false,
    nftImage: "/guigang-logo.png",
    amount: "12 APT"
  },
  {
    id: 2,
    type: "reminder",
    title: "Loan Due Soon",
    message: "AptoRobos #567 loan repayment is due in 6 hours.",
    time: "1 hour ago",
    isRead: false,
    nftImage: "/aptorobos-logo.png",
    amount: "18 APT"
  },
  {
    id: 3,
    type: "repaid",
    title: "Loan Repaid",
    message: "The Loonies #890 loan has been successfully repaid.",
    time: "3 hours ago",
    isRead: true,
    nftImage: "/theloonies-logo.jpg",
    amount: "6 APT"
  },
  {
    id: 4,
    type: "offer",
    title: "New Loan Request",
    message: "New loan request available for Aptos Monkeys collection.",
    time: "5 hours ago",
    isRead: true,
    nftImage: "/aptosmonkeys-logo.jpg"
  },
  {
    id: 5,
    type: "defaulted",
    title: "Loan Defaulted",
    message: "GUI Gang #999 loan has defaulted. NFT transferred to you.",
    time: "1 day ago",
    isRead: true,
    nftImage: "/guigang-logo.png",
    amount: "15 APT"
  }
]

const getNotificationIcon = (type: string) => {
  switch (type) {
    case "reminder":
      return <Clock className="w-4 h-4 text-yellow-400" />
    case "accepted":
    case "repaid":
      return <CheckCircle className="w-4 h-4 text-green-400" />
    case "defaulted":
      return <AlertTriangle className="w-4 h-4 text-red-400" />
    case "offer":
      return <Bell className="w-4 h-4 text-blue-400" />
    default:
      return <Bell className="w-4 h-4 text-gray-400" />
  }
}

export default function NotificationDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const [notifications, setNotifications] = useState(mockNotifications)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const unreadCount = notifications.filter(n => !n.isRead).length

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const markAsRead = (id: number) => {
    setNotifications(prev => 
      prev.map(notification => 
        notification.id === id ? { ...notification, isRead: true } : notification
      )
    )
  }

  const markAllAsRead = () => {
    setNotifications(prev => 
      prev.map(notification => ({ ...notification, isRead: true }))
    )
  }

  const removeNotification = (id: number) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id))
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative text-gray-300 hover:text-white transition-colors duration-300 p-2"
      >
        <Bell className="w-6 h-6" />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {unreadCount > 9 ? '9+' : unreadCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-96 bg-gray-900/95 backdrop-blur-sm border border-white/10 rounded-xl shadow-xl z-50 max-h-96 overflow-hidden">
          {/* Header */}
          <div className="p-4 border-b border-white/10 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-white">Notifications</h3>
            {unreadCount > 0 && (
              <button
                onClick={markAllAsRead}
                className="text-sm text-blue-400 hover:text-blue-300 transition-colors duration-300"
              >
                Mark all as read
              </button>
            )}
          </div>

          {/* Notifications List */}
          <div className="max-h-80 overflow-y-auto">
            {notifications.length === 0 ? (
              <div className="p-8 text-center text-gray-400">
                <Bell className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>No notifications yet</p>
              </div>
            ) : (
              notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`p-4 border-b border-white/5 hover:bg-white/5 transition-colors duration-300 cursor-pointer ${
                    !notification.isRead ? 'bg-blue-500/10' : ''
                  }`}
                  onClick={() => markAsRead(notification.id)}
                >
                  <div className="flex items-start space-x-3">
                    {notification.nftImage && (
                      <img
                        src={notification.nftImage}
                        alt=""
                        className="w-10 h-10 rounded-lg object-cover flex-shrink-0"
                      />
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-2">
                          {getNotificationIcon(notification.type)}
                          <h4 className={`text-sm font-medium ${
                            !notification.isRead ? 'text-white' : 'text-gray-300'
                          }`}>
                            {notification.title}
                          </h4>
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            removeNotification(notification.id)
                          }}
                          className="text-gray-400 hover:text-white transition-colors duration-300"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-sm text-gray-400 mt-1">{notification.message}</p>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-xs text-gray-500">{notification.time}</span>
                        {notification.amount && (
                          <span className="text-xs text-green-400 font-medium">{notification.amount}</span>
                        )}
                      </div>
                    </div>
                  </div>
                  {!notification.isRead && (
                    <div className="absolute left-2 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-blue-400 rounded-full"></div>
                  )}
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          <div className="p-3 border-t border-white/10 text-center">
            <button className="text-sm text-blue-400 hover:text-blue-300 transition-colors duration-300">
              View all notifications
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
