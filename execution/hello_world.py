"""
hello_world.py — Execution Layer Smoke Test
=============================================
A minimal script to verify the execution layer is wired up correctly.
Run this to confirm Python + .env loading works.

Usage:
    python execution/hello_world.py
"""

import os
from pathlib import Path

# ── Load .env if python-dotenv is available ──
try:
    from dotenv import load_dotenv
    env_path = Path(__file__).resolve().parent.parent / ".env"
    load_dotenv(env_path)
    print(f"✅  .env loaded from {env_path}")
except ImportError:
    print("ℹ️  python-dotenv not installed — skipping .env loading")
    print("   Install with: pip install python-dotenv")

# ── Verify environment ──
print("\n🏗️  Antigravity Agent — Execution Layer")
print("─" * 40)
print(f"Python:      working ✅")
print(f"Script dir:  {Path(__file__).resolve().parent}")
print(f"Project dir: {Path(__file__).resolve().parent.parent}")

# Check for API keys (without revealing them)
keys_to_check = [
    "FIRECRAWL_API_KEY",
    "OPENAI_API_KEY",
    "ANTHROPIC_API_KEY",
    "GOOGLE_API_KEY",
]

print(f"\n🔑  API Key Status:")
for key in keys_to_check:
    val = os.getenv(key)
    status = "✅ configured" if val else "⬜ not set"
    print(f"   {key}: {status}")

print("\n🚀  Execution layer is ready!")
