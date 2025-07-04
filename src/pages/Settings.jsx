function Settings() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Settings</h2>
      <div className="bg-white p-4 rounded shadow">
        <h3 className="font-semibold mb-2">User Preferences</h3>
        <label className="block mb-2">
          <span className="text-gray-700">Username</span>
          <input
            className="mt-1 block w-full border px-3 py-2 rounded"
            defaultValue="admin"
          />
        </label>
        <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">
          Save Settings
        </button>
      </div>
    </div>
  );
}

export default Settings;
