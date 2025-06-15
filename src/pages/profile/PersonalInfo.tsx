
import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { showSubmitToast } from "@/components/profile/submitToast";

interface PersonalInfoProps {
  profile: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    city: string;
    country: string;
    summary: string;
  };
  setProfile: React.Dispatch<React.SetStateAction<any>>;
  handleKeyPress: (e: React.KeyboardEvent) => void;
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({
  profile,
  setProfile,
  handleKeyPress,
}) => {
  const handleInputKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      showSubmitToast();
      handleKeyPress(e);
    }
  };

  return (
    <Card className="mb-6 bg-white border-gray-300 mx-0">
      <CardHeader>
        <CardTitle className="text-black">Personal Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-black mb-1">First Name</label>
            <Input
              value={profile.firstName}
              onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
              onKeyPress={handleInputKeyPress}
              placeholder="Enter first name"
              className="border-gray-300 text-black bg-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-black mb-1">Last Name</label>
            <Input
              value={profile.lastName}
              onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
              onKeyPress={handleInputKeyPress}
              placeholder="Enter last name"
              className="border-gray-300 text-black bg-white"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-black mb-1">Email</label>
            <Input
              type="email"
              value={profile.email}
              onChange={(e) => setProfile({ ...profile, email: e.target.value })}
              onKeyPress={handleInputKeyPress}
              placeholder="Enter email"
              className="border-gray-300 text-black bg-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-black mb-1">Phone</label>
            <Input
              value={profile.phone}
              onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
              onKeyPress={handleInputKeyPress}
              placeholder="Enter phone number"
              className="border-gray-300 text-black bg-white"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-black mb-1">City</label>
            <Input
              value={profile.city}
              onChange={(e) => setProfile({ ...profile, city: e.target.value })}
              onKeyPress={handleInputKeyPress}
              placeholder="Enter city"
              className="border-gray-300 text-black bg-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-black mb-1">Country</label>
            <Input
              value={profile.country}
              onChange={(e) => setProfile({ ...profile, country: e.target.value })}
              onKeyPress={handleInputKeyPress}
              placeholder="Enter country"
              className="border-gray-300 text-black bg-white"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-black mb-1">Summary</label>
          <Textarea
            value={profile.summary}
            onChange={(e) => setProfile({ ...profile, summary: e.target.value })}
            onKeyPress={handleInputKeyPress}
            placeholder="Profile Summary"
            rows={4}
            className="border-gray-300 text-black bg-white"
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default PersonalInfo;
