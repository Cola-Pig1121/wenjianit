import React, { useState } from 'react';
import { Mail, MapPin, Clock, Send, Github, MessageCircle, Users } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 处理表单提交
    console.log('Form submitted:', formData);
    alert('消息已发送，我们会尽快回复您！');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact-page">
      {/* Contact Hero */}
      <section className="contact-hero">
        <div className="container">
          <h1 className="page-title">联系我们</h1>
          <p className="page-subtitle">
            有任何问题或建议？欢迎与稳健IT社取得联系
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Info */}
            <div className="contact-info">
              <h2>联系方式</h2>
              <p className="contact-intro">
                我们很乐意听到您的声音。无论是技术交流、合作咨询还是加入申请，
                都可以通过以下方式联系我们。
              </p>

              <div className="contact-methods">
                <div className="contact-method">
                  <div className="method-icon">
                    <Mail />
                  </div>
                  <div className="method-info">
                    <h3>社长微信号</h3>
                    <p>z52cola0606pig</p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">
                    <MapPin />
                  </div>
                  <div className="method-info">
                    <h3>活动地点</h3>
                    <p>养正中学三楼计算机教室</p>
                    <p>每周二、四17:30-18:00</p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">
                    <Clock />
                  </div>
                  <div className="method-info">
                    <h3>活动时间</h3>
                    <p>周三：技术分享会</p>
                    <p>周五：项目实践课</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="social-links">
                <h3>社交媒体</h3>
                <div className="social-grid">
                  <a href="https://github.com/wenjianit" className="social-link" target="_blank" rel="noopener noreferrer">
                    <Github className="social-icon" />
                    <span>GitHub</span>
                  </a>
                  <button className="social-link" onClick={() => alert('请联系管理员获取微信群二维码')}>
                    <MessageCircle className="social-icon" />
                    <span>微信群</span>
                  </button>
                  <button className="social-link" onClick={() => alert('QQ群号：123456789')}>
                    <Users className="social-icon" />
                    <span>QQ群</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-wrapper">
              <div className="contact-form-card">
                <h2>发送消息</h2>
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name">姓名 *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="请输入您的姓名"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">邮箱 *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="请输入您的邮箱地址"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">主题 *</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      placeholder="请输入消息主题"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">消息内容 *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      placeholder="请详细描述您的问题或建议..."
                    />
                  </div>

                  <button type="submit" className="submit-btn">
                    <Send className="btn-icon" />
                    发送消息
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2 className="section-title">常见问题</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>如何加入稳健IT社？</h3>
              <p>
                您可以通过填写在线申请表格或直接参加我们的招新活动。
                我们每学期都会举办招新宣讲会，欢迎关注我们的官方通知。
              </p>
            </div>
            <div className="faq-item">
              <h3>需要什么技术基础吗？</h3>
              <p>
                不需要很强的技术基础，我们欢迎所有对技术感兴趣的同学。
                社团会提供完整的培训体系，从基础到进阶都有相应的课程。
              </p>
            </div>
            <div className="faq-item">
              <h3>社团活动时间安排？</h3>
              <p>
                我们每周三举办技术分享会，每周五进行项目实践。
                此外还会不定期举办技术讲座、编程竞赛等活动。
              </p>
            </div>
            <div className="faq-item">
              <h3>可以参与哪些项目？</h3>
              <p>
                社团有多个正在进行的项目，包括Web开发、移动应用、
                数据分析等。成员可以根据兴趣和技能选择参与不同的项目。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;