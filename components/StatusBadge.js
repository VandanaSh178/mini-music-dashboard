// components/StatusBadge.js
export default function StatusBadge({ status }) {
  const getStatusClass = () => {
    switch (status?.toLowerCase()) {
      case 'published':
        return 'badge-published';
      case 'draft':
        return 'badge-draft';
      case 'submitted':
        return 'badge-submitted';
      default:
        return 'badge-draft';
    }
  };

  return <span className={`badge ${getStatusClass()}`}>{status}</span>;
}