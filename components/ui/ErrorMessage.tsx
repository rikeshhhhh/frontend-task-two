export default function ErrorMessage({ message }: { message: string }) {
  return (
    <div className="flex justify-center items-center py-12">
      <p className="text-red-500 text-sm">{message}</p>
    </div>
  );
}
