
import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Settings = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSignOut = () => {
    toast({
      title: "Signed out successfully",
      description: "You have been signed out of your account.",
    });
    // Add actual sign out logic here
  };

  const handleDeleteAllChats = () => {
    toast({
      title: "All chats deleted",
      description: "All your chats have been permanently removed.",
      variant: "destructive"
    });
    // Add actual delete chats logic here
  };

  const handleDeleteAccount = () => {
    toast({
      title: "Account deletion requested",
      description: "Your account deletion request has been submitted.",
      variant: "destructive"
    });
    // Add actual account deletion logic here
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex items-center mb-8">
          <button
            onClick={() => navigate(-1)}
            className="mr-4 p-2 hover:bg-gray-200 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-2xl font-semibold text-gray-900">Settings</h1>
        </div>

        {/* Profile Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Profile</h2>
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="text-sm font-medium text-gray-900">user@example.com</div>
            <div className="text-sm text-gray-500 mt-1">
              This account was authenticated with Google and the email cannot be updated.
            </div>
          </div>
        </div>

        {/* Billing Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Billing</h2>
          <p className="text-sm text-gray-600 mb-6">Manage your billing information and usage history</p>
          
          <div className="space-y-6">
            <div className="flex justify-between items-center py-4 border-b border-gray-100">
              <div>
                <h3 className="text-sm font-medium text-gray-900">Plan Details</h3>
              </div>
              <div className="text-right">
                <span className="text-sm font-medium text-gray-900">Current Plan:</span>
                <span className="ml-2 text-sm text-gray-600">Free</span>
              </div>
            </div>

            <div className="flex justify-between items-center py-4 border-b border-gray-100">
              <div>
                <h3 className="text-sm font-medium text-gray-900">Search Credits</h3>
                <p className="text-sm text-gray-500">You have 0 monthly search credits remaining.</p>
              </div>
              <span className="text-sm font-medium text-gray-900">0/3</span>
            </div>

            <button
              onClick={() => navigate("/pricing")}
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors"
            >
              Upgrade to Pro
            </button>
          </div>
        </div>

        {/* Session Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Session</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-2">Sign Out</h3>
              <p className="text-sm text-gray-600 mb-4">Sign out of your account on this device.</p>
              <button
                onClick={handleSignOut}
                className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-600 transition-colors"
              >
                Sign out
              </button>
            </div>
          </div>
        </div>

        {/* Advanced Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Advanced</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-2">Delete all chats</h3>
              <p className="text-sm text-gray-600 mb-4">
                Permanently removes all your chats and all of its contents from the platform. This action is not reversible — please continue with caution.
              </p>
              <button
                onClick={handleDeleteAllChats}
                className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-600 transition-colors"
              >
                Delete all chats
              </button>
            </div>

            <div className="pt-6 border-t border-gray-100">
              <h3 className="text-sm font-medium text-gray-900 mb-2">Permanently delete my account</h3>
              <p className="text-sm text-gray-600 mb-4">
                Permanently remove your account and all of its contents from the platform. This action is not reversible — please continue with caution.
              </p>
              <p className="text-sm text-gray-500 mb-4">
                For information on how we use you data, please visit our{" "}
                <a href="#" className="text-indigo-600 hover:text-indigo-700 underline">
                  Privacy Policy
                </a>
              </p>
              <button
                onClick={handleDeleteAccount}
                className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-600 transition-colors"
              >
                Request account deletion
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
