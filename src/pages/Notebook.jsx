import React, { useState, useEffect } from 'react';

const Notebook = () => {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState({ id: null, title: '', content: '' });
  const [isEditing, setIsEditing] = useState(false);

  // 从localStorage加载笔记
  useEffect(() => {
    const savedNotes = localStorage.getItem('notes');
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
  }, []);

  // 保存笔记到localStorage
  useEffect(() => {
    if (notes.length > 0) {
      localStorage.setItem('notes', JSON.stringify(notes));
    }
  }, [notes]);

  // 处理创建新笔记
  const handleCreateNote = () => {
    setCurrentNote({ id: null, title: '', content: '' });
    setIsEditing(true);
  };

  // 处理编辑笔记
  const handleEditNote = (note) => {
    setCurrentNote(note);
    setIsEditing(true);
  };

  // 处理保存笔记
  const handleSaveNote = () => {
    if (currentNote.title.trim() === '') {
      alert('请输入笔记标题');
      return;
    }

    if (currentNote.id) {
      // 更新现有笔记
      setNotes(notes.map(note => 
        note.id === currentNote.id ? { ...currentNote, updatedAt: new Date().toISOString() } : note
      ));
    } else {
      // 创建新笔记
      const newNote = {
        ...currentNote,
        id: Date.now().toString(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      setNotes([...notes, newNote]);
    }

    setIsEditing(false);
    setCurrentNote({ id: null, title: '', content: '' });
  };

  // 处理删除笔记
  const handleDeleteNote = (id) => {
    if (window.confirm('确定要删除这篇笔记吗？')) {
      setNotes(notes.filter(note => note.id !== id));
    }
  };

  // 处理取消编辑
  const handleCancelEdit = () => {
    setIsEditing(false);
    setCurrentNote({ id: null, title: '', content: '' });
  };

  return (
    <div className="section container">
      <h1 className="title">记事本</h1>

      {isEditing ? (
        <div className="card mb-8">
          <h2 className="subtitle">{currentNote.id ? '编辑笔记' : '创建新笔记'}</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">标题</label>
              <input
                type="text"
                value={currentNote.title}
                onChange={(e) => setCurrentNote({ ...currentNote, title: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="请输入笔记标题"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">内容</label>
              <textarea
                value={currentNote.content}
                onChange={(e) => setCurrentNote({ ...currentNote, content: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary min-h-[200px]"
                placeholder="请输入笔记内容"
              />
            </div>
            <div className="flex space-x-4">
              <button 
                onClick={handleSaveNote}
                className="btn btn-primary flex-1"
              >
                保存
              </button>
              <button 
                onClick={handleCancelEdit}
                className="btn border border-gray-300 flex-1"
              >
                取消
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-end mb-4">
          <button 
            onClick={handleCreateNote}
            className="btn btn-primary"
          >
            创建新笔记
          </button>
        </div>
      )}

      {notes.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {notes.map((note) => (
            <div key={note.id} className="card">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-lg">{note.title}</h3>
                <div className="flex space-x-2">
                  <button 
                    onClick={() => handleEditNote(note)}
                    className="text-primary hover:underline text-sm"
                  >
                    编辑
                  </button>
                  <button 
                    onClick={() => handleDeleteNote(note.id)}
                    className="text-red-500 hover:underline text-sm"
                  >
                    删除
                  </button>
                </div>
              </div>
              <p className="text text-gray-600 mb-4 line-clamp-3">{note.content}</p>
              <div className="flex justify-between text-xs text-gray-500">
                <span>创建于: {new Date(note.createdAt).toLocaleString()}</span>
                <span>更新于: {new Date(note.updatedAt).toLocaleString()}</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="card text-center py-12">
          <p className="text">还没有笔记，点击"创建新笔记"开始记录</p>
        </div>
      )}
    </div>
  );
};

export default Notebook;