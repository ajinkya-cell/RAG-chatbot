"use client";

import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { processPdfFile } from "./actions";

import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Loader2, Send, UploadCloud } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Arrow } from "@radix-ui/react-tooltip";

export default function PDFUpload() {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{
    type: "error" | "success";
    text: string;
  } | null>(null);

  const handleFileUpload = async (file: File) => {
    if (!file) return;

    setIsLoading(true);
    setMessage(null);

    try {
      const formData = new FormData();
      formData.append("pdf", file);

      const result = await processPdfFile(formData);

      if (result.success) {
        setMessage({
          type: "success",
          text: result.message || "PDF processed successfully",
        });
      } else {
        setMessage({
          type: "error",
          text: result.error || "Failed to process PDF",
        });
      }
    } catch (error) {
      setMessage({
        type: "error",
        text: "An error occurred while processing the PDF",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const pdf = acceptedFiles[0];
    if (pdf) handleFileUpload(pdf);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: { "application/pdf": [] },
    maxFiles: 1,
    onDrop,
  });

  return (
    <div className="mb-20 flex flex-col items-center py-10 px-6  bg-gradient-to-b from-emerald-800 via-zinc-800 rounded-4xl to-teal-900">
      <div className="max-w-xl w-full">
        <h1 className="text-4xl font-bold text-white mb-10 text-center">
          Upload Your PDF
        </h1>

        <Card className="backdrop-blur bg-white/5 border-white/10 shadow-xl rounded-2xl">
          <CardContent className="p-8">
            {/* Upload Area */}
            <div
              {...getRootProps()}
              className={`border-2 border-dashed rounded-xl p-10 cursor-pointer transition-all 
                ${
                  isDragActive
                    ? "border-primary bg-primary/10"
                    : "border-zinc-600 hover:border-zinc-400"
                }`}
            >
              <input {...getInputProps()} />

              <div className="flex flex-col items-center text-center space-y-4">
                {isLoading ? (
                  <Loader2 className="h-10 w-10 animate-spin text-zinc-300" />
                ) : (
                  <UploadCloud className="h-12 w-12 text-zinc-300" />
                )}

                <p className="text-lg text-zinc-200">
                  {isDragActive
                    ? "Drop your PDF here…"
                    : "Drag & drop your PDF here or click to browse"}
                </p>

                <p className="text-sm text-zinc-400">Only .pdf files are allowed</p>
              </div>
             
            </div>

            {/* Alerts */}
            <AnimatePresence mode="wait">
              {message && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-6"
                >
                  <Alert
                    variant={message.type === "error" ? "destructive" : "default"}
                    className="rounded-xl"
                  >
                    <AlertTitle>
                      {message.type === "error" ? "Error" : "Success"}
                    </AlertTitle>
                    <AlertDescription>{message.text}</AlertDescription>
                  </Alert>
                </motion.div>
              )}
            </AnimatePresence>
          </CardContent>
        </Card>
      </div>
    <div className="">
          <div className="mt-5 flex pt-8 ">
        <a href="/chat">
        <Button variant="secondary" className="font-mono flex gap-3 rounded-2xl text-2xl px-7 py-6">Chat <div className="">
             <Send/>
        </div>
        
        </Button>
        
        </a>
      </div>
    </div>
    </div>
  );
}
