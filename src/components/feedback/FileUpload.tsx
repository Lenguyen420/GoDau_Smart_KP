import { ChangeEvent, useRef, useState } from "react";

type UploadFile = {
  name: string;
  size: number;
};

function FileUpload() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<UploadFile[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(event.target.files ?? []).slice(0, 5);

    setFiles(
      selectedFiles.map((file) => ({
        name: file.name,
        size: file.size,
      })),
    );
  };

  return (
    <div className="feedback-upload">
      <label>File đính kèm</label>
      <input
        ref={inputRef}
        type="file"
        multiple
        accept="image/*,.pdf,.doc,.docx,.xls,.xlsx"
        onChange={handleChange}
      />
      <button type="button" onClick={() => inputRef.current?.click()}>
        <span>+</span>
        <strong>Tải lên</strong>
      </button>
      <p>Hỗ trợ ảnh, PDF, Word, Excel (tối đa 5 tệp, mỗi tệp 10 MB)</p>

      {files.length > 0 && (
        <ul>
          {files.map((file) => (
            <li key={`${file.name}-${file.size}`}>{file.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FileUpload;
