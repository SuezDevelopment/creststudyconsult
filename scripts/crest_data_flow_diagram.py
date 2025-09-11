from graphviz import Digraph

# Create a directed graph
dot = Digraph(comment="Crest Study Consult Data Flow", format="png")

# Nodes
dot.node("Crest", "Crest Study Consult\n(Data Controller)", shape="box", style="filled", color="lightblue", fontname="Arial")

# Data Subjects
dot.node("Students", "Students / Parents\n(Data Subjects)", shape="ellipse", color="green", fontname="Arial")
dot.edge("Students", "Crest", label="Provide Personal Data\n(passport, transcripts, IELTS, finances)", fontsize="10", fontname="Arial")

# Internal Storage/Processing
dot.node("CRM", "CRM / Internal Systems\n(Data Processor)", shape="box", color="orange", fontname="Arial")
dot.edge("Crest", "CRM", label="Store & Manage Data", fontsize="10", fontname="Arial")

# External Partners
dot.node("Universities", "Universities Abroad\n(Data Controller)", shape="box", color="lightgrey", fontname="Arial")
dot.edge("Crest", "Universities", label="Applications & Supporting Docs", fontsize="10", fontname="Arial")

dot.node("Embassies", "Embassies / Visa Centres\n(Data Controller)", shape="box", color="lightgrey", fontname="Arial")
dot.edge("Crest", "Embassies", label="Visa Applications & Biometrics", fontsize="10", fontname="Arial")

dot.node("Scholarships", "Scholarship Bodies\n(Data Controller)", shape="box", color="lightgrey", fontname="Arial")
dot.edge("Crest", "Scholarships", label="Scholarship Applications", fontsize="10", fontname="Arial")

# Technical Services
dot.node("Cloud", "Cloud Hosting / Email / Payments\n(Data Processor)", shape="box", color="orange", fontname="Arial")
dot.edge("Crest", "Cloud", label="Data Hosting, Emails, Payments", fontsize="10", fontname="Arial")

# Regulatory Oversight
dot.node("NDPC", "Nigeria Data Protection Commission\n(Regulator)", shape="oval", color="red", fontname="Arial")
dot.edge("Crest", "NDPC", label="Registration & Compliance Reports", fontsize="10", fontname="Arial")

# Render the diagram
file_path = "/mnt/data/crest_data_flow"
dot.render(file_path)

print(f"Diagram saved as {file_path}.png")