"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/hooks/use-toast"
import { Loader2 } from "lucide-react"

export function DonationForm() {
  const [amount, setAmount] = useState("")
  const [customAmount, setCustomAmount] = useState("")
  const [donationType, setDonationType] = useState("tithe")
  const [frequency, setFrequency] = useState("one-time")
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      // In a real application, you would process the payment here
      // For now, we'll just simulate a successful donation
      await new Promise((resolve) => setTimeout(resolve, 1500))

      toast({
        title: "Donation successful",
        description: "Thank you for your generous donation!",
      })

      // Reset form
      setAmount("")
      setCustomAmount("")
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem processing your donation. Please try again.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const handleAmountChange = (value: string) => {
    setAmount(value)
    setCustomAmount("")
  }

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value)
    setAmount("custom")
  }

  const finalAmount = amount === "custom" ? customAmount : amount

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label>Select Amount</Label>
        <RadioGroup value={amount} onValueChange={handleAmountChange} className="grid grid-cols-3 gap-2">
          <div>
            <RadioGroupItem value="10" id="amount-10" className="sr-only" />
            <Label
              htmlFor="amount-10"
              className={`flex h-10 w-full items-center justify-center rounded-md border text-sm transition-colors hover:bg-muted ${
                amount === "10" ? "bg-primary text-primary-foreground" : ""
              }`}
            >
              $10
            </Label>
          </div>
          <div>
            <RadioGroupItem value="25" id="amount-25" className="sr-only" />
            <Label
              htmlFor="amount-25"
              className={`flex h-10 w-full items-center justify-center rounded-md border text-sm transition-colors hover:bg-muted ${
                amount === "25" ? "bg-primary text-primary-foreground" : ""
              }`}
            >
              $25
            </Label>
          </div>
          <div>
            <RadioGroupItem value="50" id="amount-50" className="sr-only" />
            <Label
              htmlFor="amount-50"
              className={`flex h-10 w-full items-center justify-center rounded-md border text-sm transition-colors hover:bg-muted ${
                amount === "50" ? "bg-primary text-primary-foreground" : ""
              }`}
            >
              $50
            </Label>
          </div>
          <div>
            <RadioGroupItem value="100" id="amount-100" className="sr-only" />
            <Label
              htmlFor="amount-100"
              className={`flex h-10 w-full items-center justify-center rounded-md border text-sm transition-colors hover:bg-muted ${
                amount === "100" ? "bg-primary text-primary-foreground" : ""
              }`}
            >
              $100
            </Label>
          </div>
          <div>
            <RadioGroupItem value="250" id="amount-250" className="sr-only" />
            <Label
              htmlFor="amount-250"
              className={`flex h-10 w-full items-center justify-center rounded-md border text-sm transition-colors hover:bg-muted ${
                amount === "250" ? "bg-primary text-primary-foreground" : ""
              }`}
            >
              $250
            </Label>
          </div>
          <div>
            <RadioGroupItem value="custom" id="amount-custom" className="sr-only" />
            <Label
              htmlFor="amount-custom"
              className={`flex h-10 w-full items-center justify-center rounded-md border text-sm transition-colors hover:bg-muted ${
                amount === "custom" ? "bg-primary text-primary-foreground" : ""
              }`}
            >
              Custom
            </Label>
          </div>
        </RadioGroup>
      </div>

      {amount === "custom" && (
        <div className="space-y-2">
          <Label htmlFor="custom-amount">Custom Amount</Label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2">$</span>
            <Input
              id="custom-amount"
              type="number"
              min="1"
              step="0.01"
              value={customAmount}
              onChange={handleCustomAmountChange}
              className="pl-7"
              placeholder="Enter amount"
              required
            />
          </div>
        </div>
      )}

      <div className="space-y-2">
        <Label htmlFor="donation-type">Donation Type</Label>
        <Select value={donationType} onValueChange={setDonationType}>
          <SelectTrigger id="donation-type">
            <SelectValue placeholder="Select donation type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="tithe">Tithe</SelectItem>
            <SelectItem value="offering">Offering</SelectItem>
            <SelectItem value="building-fund">Building Fund</SelectItem>
            <SelectItem value="missions">Missions</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label>Frequency</Label>
        <RadioGroup value={frequency} onValueChange={setFrequency} className="flex space-x-4">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="one-time" id="one-time" />
            <Label htmlFor="one-time">One-time</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="weekly" id="weekly" />
            <Label htmlFor="weekly">Weekly</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="monthly" id="monthly" />
            <Label htmlFor="monthly">Monthly</Label>
          </div>
        </RadioGroup>
      </div>

      <Tabs defaultValue="card" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="card">Credit Card</TabsTrigger>
          <TabsTrigger value="bank">Bank Account</TabsTrigger>
        </TabsList>
        <TabsContent value="card" className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="card-name">Name on Card</Label>
            <Input id="card-name" placeholder="John Doe" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="card-number">Card Number</Label>
            <Input id="card-number" placeholder="1234 5678 9012 3456" required />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="expiry">Expiry Date</Label>
              <Input id="expiry" placeholder="MM/YY" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cvc">CVC</Label>
              <Input id="cvc" placeholder="123" required />
            </div>
          </div>
        </TabsContent>
        <TabsContent value="bank" className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="account-name">Account Holder Name</Label>
            <Input id="account-name" placeholder="John Doe" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="routing-number">Routing Number</Label>
            <Input id="routing-number" placeholder="123456789" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="account-number">Account Number</Label>
            <Input id="account-number" placeholder="1234567890" required />
          </div>
        </TabsContent>
      </Tabs>

      <Button type="submit" className="w-full" disabled={!finalAmount || loading}>
        {loading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Processing...
          </>
        ) : (
          `Donate ${finalAmount ? `$${finalAmount}` : ""}`
        )}
      </Button>
    </form>
  )
}
